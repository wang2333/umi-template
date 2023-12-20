import { useMutation, useQuery, UseQueryResult } from '@umijs/max';

import { getFn } from '@/lib/request';

interface User {
  name: string;
  age: number;
}

interface Result {
  list: User[];
}

export function useQueryUserList(params: any): UseQueryResult<Result> {
  return useQuery({
    queryKey: ['GET', '/api/v1/queryUserList', params],
  });
}

export function useQueryUserList3(params: any): UseQueryResult<Result> {
  return useQuery({
    queryKey: ['GET', '/api/v1/queryUserList', params],
  });
}

export function useQueryUserList2() {
  return useMutation((params: any) =>
    getFn<Result>('/api/v1/queryUserList', params),
  );
}

export async function queryUserList() {}
export async function addUser() {}
export async function getUserDetail() {}
export async function modifyUser() {}
export async function deleteUser() {}
