import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query((retursn) => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
