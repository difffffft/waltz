interface BaseResponse<T> {
  code?: number;
  data?: T;
  msg?: string;
}

interface TreeNode<K, T> {
  id: K;
  pid: K;
  children?: TreeNode<K, T>[];
}

interface BasePageResponse<T> {
  data: T[];
  meta: {
    totalPages: number;
    currentPage: number;
    pageSize: number;
    totalItems: number;
  };
}

type BaseCreateResponse = number;

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface ArticlePublishedAtDetail {
  year: string;
  quarter: string;
  month: {
    number: string;
    english: string;
  },
  week: string;
  day: string;
  second: string;
}


interface DictTypeResponse {
  dictType: string;
  dictName: string;
  remark: string;
  sort: number;
  dataList: DictData[];
}

interface DictData {
  dictLabel: string;
  dictValue: string;
  labelClass: string;
}

interface BaseQuery {
  page: number;
  limit: number;
  order?: string;
  asc?: boolean;
}

interface ArticleQuery extends BaseQuery {
  title?: string;
  authorId?: number;
  status?: string;
  order?: string;
  asc?: boolean;
}

interface UserQuery extends BaseQuery {
  username?: string;
  gender?: number;
  email?: string;
}

interface RoleQuery extends BaseQuery {
  title?: string;
}

interface MenuQuery extends BaseQuery {
  title?: string;
  pid?: number;
  order?: string;
  asc?: boolean;
}

interface AttachmentQuery extends BaseQuery {
  title?: string;
  ext?: string;
}

interface SiteConfigQuery extends BaseQuery {
  key?: string;
  sort: number;
}

interface DictTypeQuery extends BaseQuery {
  dictType?: string;
  dictName?: string;
}

interface DictDataQuery extends BaseQuery {
  dictTypeId: number;
}
