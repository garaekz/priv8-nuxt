import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret,
      token: 'http://localhost:8080/api/v1/oauth/github',
    })
  ],
});