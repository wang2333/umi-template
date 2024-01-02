import { useQuery } from '@/hooks';

interface User {
  name: string;
  age: number;
}

interface Result {
  list: User[];
}

export function useQueryUserList2(params?: any) {
  return useQuery<Result>('GET', '/api/v1/queryUserList', params);
}

export async function queryUserList() {}
export async function addUser() {}
export async function getUserDetail() {}
export async function modifyUser() {}
export async function deleteUser() {}
