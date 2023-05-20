const Blogs = () => {
  return (
    <div className="relative">
      <div className=" bg-slate-100 text-center p-20">
        <h1 className="font-bold text-4xl">Questions</h1>
      </div>
      <div className=" w-4/5 mx-auto">
        <h1 className="text-xl font-bold pt-8">
          1st Questions:What is an access token and refresh token? How do they
          work and where should we store them on the client-side?
        </h1>
        <p>
          <p>
            An access token and refresh token are commonly used in
            authentication and authorization systems. They play a crucial role
            in securing and managing access to protected resources on the
            client-side. Here's a small summary of what they are and how they
            work:
          </p>
          <br />
          <p>
            1. Access Token: An access token is a credential that is issued by
            an authentication server when a user successfully authenticates
            their identity. It is typically a string of characters that
            represents the user's authorization to access specific resources or
            perform certain actions. Access tokens have an expiration time and
            are used to make authorized requests to protected APIs or services.{" "}
          </p>{" "}
          <br />
          <p>
            2. Refresh Token: A refresh token is also issued by the
            authentication server alongside the access token. It is a long-lived
            credential that is used to obtain new access tokens when the current
            access token expires. Refresh tokens are securely stored on the
            client-side and sent to the authentication server to request a new
            access token without requiring the user to reauthenticate.{" "}
          </p>{" "}
          <br />
          <h4 className="text-lg font-semibold">
            Here's a simplified flow of how access tokens and refresh tokens
            work together:
          </h4>
          1. User logs in: The user provides their credentials (username and
          password) to the authentication server. <br />
          2. Server validates credentials: The authentication server verifies
          the user's credentials and, if valid, generates an access token and
          refresh token. <br />
          3. Access token usage: The client includes the access token in the
          header of each request to protected APIs or services. <br />
          4. Access token expiration: The access token has a limited lifespan.
          Once it expires, it is no longer valid for making authorized requests.{" "}
          <br />
          5. Token refresh: When the access token expires, the client sends the
          refresh token to the authentication server to request a new access
          token. <br />
          6. New access token issued: If the refresh token is valid and not
          expired, the authentication server generates a new access token and
          sends it back to the client. <br />
          7. Repeat process: The client continues using the new access token for
          authorized requests. This cycle repeats until the refresh token also
          expires or is revoked. <br /> <br />
          <p>
            Storing access tokens and refresh tokens on the client-side should
            be done securely to prevent unauthorized access. Best practices
            include storing them in secure, HTTP-only cookies or in the
            browser's local storage, encrypted if possible, to protect them from
            cross-site scripting (XSS) attacks.
          </p>{" "}
          <br />
          <p>
            Note that the specific implementation and storage mechanisms may
            vary depending on the authentication system and framework being
            used. It's important to follow industry best practices and consult
            relevant documentation or security guidelines for the specific
            technology stack you're working with.
          </p>
        </p>
        <h1 className="text-xl font-bold pt-8">
          2nd Questions:ompare SQL and NoSQL databases?
        </h1>
        <p>
          While SQL is valued for ensuring data validity, NoSQL is good when
          it's more important that the availability of big data is fast. It's
          also a good choice when a company will need to scale because of
          changing requirements. NoSQL is easy-to-use, flexible and offers high
          performance.
        </p>
        <h1 className="text-xl font-bold pt-8">
          3rd Questions:What is express js? What is Nest JS?
        </h1>
        <p>
          Express is a minimalist and flexible framework that is easy to use and
          has a large community of developers. NestJS, on the other hand, is a
          newer framework that provides additional features such as dependency
          injection, a modular architecture, and an intuitive CLI
        </p>
        <h1 className="text-xl font-bold pt-8">
          4th Questions:What is MongoDB aggregate and how does it work
        </h1>
        <p className=" pb-20">
          Aggregation is a way of processing a large number of documents in a
          collection by means of passing them through different stages. The
          stages make up what is known as a pipeline. The stages in a pipeline
          can filter, sort, group, reshape and modify documents that pass
          through the pipeline.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Blogs;
