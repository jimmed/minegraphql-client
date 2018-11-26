import React, { Suspense } from "react";
import DefaultLoadingPage from "./Loading";
import DefaultErrorPage from "./Error";

const hookedPage = (
  hook,
  Page,
  LoadingPage = DefaultLoadingPage,
  ErrorPage = DefaultErrorPage
) => () => {
  const InnerPage = () => {
    const { data, error } = hook();

    return error ? <ErrorPage error={error} /> : <Page {...data} />;
  };

  return (
    <main>
      <Suspense fallback={<LoadingPage />}>
        <InnerPage />
      </Suspense>
    </main>
  );
};

export default hookedPage;
