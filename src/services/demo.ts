import { useMutation, useQuery, UseQueryResult } from '@umijs/max';

import { getFn, postFn } from '@/lib/request';

interface User {
  name: string;
  age: number;
}

interface Result {
  list: User[];
}

export function useQueryUserList(params: any): UseQueryResult<Result> {
  return useQuery({
    queryKey: ['/api/v1/queryUserList', params],
    queryFn: postFn,
  });
}

export function useQueryUserList2() {
  return useMutation({
    mutationFn: (params: any) => {
      return getFn<Result>({ queryKey: ['/api/v1/queryUserList', params] });
    },
  });
}

export async function queryUserList() {}
export async function addUser() {}
export async function getUserDetail() {}
export async function modifyUser() {}
export async function deleteUser() {}
