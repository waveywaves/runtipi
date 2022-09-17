import { ExecutionResult, graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'type-graphql';
import { createSchema } from '../schema';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
  userId?: number;
}

let schema: GraphQLSchema | null = null;

export const gcall = async <T>({ source, variableValues, userId }: Options): Promise<ExecutionResult<T, { [key: string]: any }>> => {
  if (!schema) {
    schema = await createSchema();
  }

  return graphql({
    schema,
    source,
    variableValues,
    contextValue: { req: { session: { userId } } },
  }) as any;
};