/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import useSwr from 'swr';
import type { Key, SWRConfiguration } from 'swr';
import useSWRMutation from 'swr/mutation';
import type { SWRMutationConfiguration } from 'swr/mutation';
import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const listPets = (params?: ListPetsParams, version: number = 1) => {
  return customInstance<Pets>({
    url: `/v${version}/pets`,
    method: 'GET',
    params,
  });
};

export const getListPetsKey = (params?: ListPetsParams, version: number = 1) =>
  [`/v${version}/pets`, ...(params ? [params] : [])] as const;

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */
export const useListPets = <TError = Error>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof listPets>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!version;
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getListPetsKey(params, version) : null));
  const swrFn = () => listPets(params, version);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: CreatePetsBody,
  version: number = 1,
) => {
  return customInstance<Pet>({
    url: `/v${version}/pets`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationFetcher = (version: number = 1) => {
  return (_: string, { arg }: { arg: CreatePetsBody }): Promise<Pet> => {
    return createPets(arg, version);
  };
};
export const getCreatePetsMutationKey = (version: number = 1) =>
  `/v${version}/pets` as const;

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error>(
  version: number = 1,
  options?: {
    swr?: SWRMutationConfiguration<
      Awaited<ReturnType<typeof createPets>>,
      TError,
      string,
      CreatePetsBody,
      Awaited<ReturnType<typeof createPets>>
    > & { swrKey?: string };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const swrKey = swrOptions?.swrKey ?? getCreatePetsMutationKey(version);
  const swrFn = getCreatePetsMutationFetcher(version);

  const query = useSWRMutation(swrKey, swrFn, swrOptions);

  return {
    swrKey,
    ...query,
  };
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (petId: string, version: number = 1) => {
  return customInstance<Pet>({
    url: `/v${version}/pets/${petId}`,
    method: 'GET',
  });
};

export const getShowPetByIdKey = (petId: string, version: number = 1) =>
  [`/v${version}/pets/${petId}`] as const;

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */
export const useShowPetById = <TError = Error>(
  petId: string,
  version: number = 1,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof showPetById>>, TError> & {
      swrKey?: Key;
      enabled?: boolean;
    };
  },
) => {
  const { swr: swrOptions } = options ?? {};

  const isEnabled = swrOptions?.enabled !== false && !!(version && petId);
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getShowPetByIdKey(petId, version) : null));
  const swrFn = () => showPetById(petId, version);

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  );

  return {
    swrKey,
    ...query,
  };
};
