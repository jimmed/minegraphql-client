import React, { Suspense } from "react";
import DefaultLoadingPage from "./Loading";
import DefaultErrorPage from "./Error";

const hookedPage = (
  hook,
  Page,
  LoadingPage = DefaultLoadingPage,
  ErrorPage = DefaultErrorPage
) => props => {
  const InnerPage = () => {
    const { data, error } = hook(props);

    return error ? <ErrorPage error={error} /> : <Page {...data} />;
  };

  return (
    <Suspense fallback={<LoadingPage />} maxDuration={150}>
      <InnerPage />
    </Suspense>
  );
};

export default hookedPage;
