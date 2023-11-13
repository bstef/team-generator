import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import type { League, Player } from '@prisma/client'

export const useLeague = () => {
  const queryClient = useQueryClient()

  const get = (league?: number) => {
    return useQuery({
      queryKey: ['league', league],
      enabled: !!league,
      queryFn: async () => {
        const data = await $fetch<League & { players: Player[] }>('/api/account/league', {
          query: { league },
        })

        return data
      },
    })
  }

  const create = () => {
    return useMutation({
      mutationFn: async (league: Partial<League>) => {
        const res = await $fetch('/api/account/league/', {
          method: 'POST',
          body: league,
        })

        return res
      },
      onSuccess: ({ account }) => {
        queryClient.invalidateQueries({ queryKey: ['account', account?.hash] })
      },
    })
  }

  const update = () => {
    return useMutation({
      mutationFn: async ({ id, updatedLeague }: { id: number; updatedLeague: Partial<League> }) => {
        const res = await $fetch('/api/account/league/:id', {
          method: 'PUT',
          body: updatedLeague,
          params: { id },
        })

        return res
      },
      onSuccess: ({ id, account }) => {
        queryClient.invalidateQueries({ queryKey: ['league', id] })
        queryClient.invalidateQueries({ queryKey: ['account', account?.hash] })
      },
    })
  }

  const duplicate = () => {
    return useMutation({
      mutationFn: async (leagueId: number) => {
        const res = await $fetch('/api/account/league/duplicate', {
          method: 'POST',
          body: { id: leagueId },
        })

        return res
      },
      onSuccess: ({ account }) => {
        queryClient.invalidateQueries({ queryKey: ['account', account?.hash] })
      },
    })
  }

  const del = () => {
    return useMutation({
      mutationFn: async (leagueId: number) => {
        const res = await $fetch('/api/account/league/:id', {
          method: 'DELETE',
          params: { id: leagueId },
        })

        return res
      },
      onSuccess: ({ account, id }) => {
        queryClient.invalidateQueries({ queryKey: ['account', account?.hash] })
        queryClient.removeQueries({ queryKey: ['league', id] })
      },
    })
  }

  return { get, create, del, duplicate, update }
}