"use client";

import { Card, CardContent } from "@/components/ui/card";

export const SignUpView = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form>Col 1</form>

          <div className="relative hidden flex-col items-center justify-center gap-y-4 bg-radial from-green-700 to-green-900 md:flex">
            Col 2
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
