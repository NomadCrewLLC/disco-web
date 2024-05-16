import { Spinner } from '@nextui-org/react';

export function FullscreenSpinner({}) {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center darkPrimary bg-background">
        <Spinner />
      </div>
    </>
  );
}
