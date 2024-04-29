import { secretKey, whiteList } from "../config";
import User from "../models/User";
import jwt from "jsonwebtoken";
import MenuService from "../service/MenuService";

export default defineEventHandler(async (event) => {
  // 拦截所有api请求
  // 非api请求直接通过
  if (!event.path.startsWith("/api")) {
    return;
  }

  // 非后台管理的直接通过
  if (!event.path.startsWith("/api/admin")) {
    return;
  }

  // 如果是白名单请求，直接通过
  if (defineFilterByWhiteList(event.path, whiteList)) {
    return;
  }

  const token = event.headers.get("Authorization") || getQuery(event).Authorization as string;
  if (!token) {
    return defineError({ msg: "请先登录" })
  }

  try {
    const decoded = jwt.verify(token, secretKey) as { id: string };
    const userId = decoded.id;
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return defineError({ msg: "用户已被删除" })
    }
    // const menuService = new MenuService();
    // user.authority = await menuService.getUserAuthority(user);

    // 把user放到上下文
    event.context.user = user

    
  } catch (err) {
    return defineError({ msg: "token无效" })
  }
});
