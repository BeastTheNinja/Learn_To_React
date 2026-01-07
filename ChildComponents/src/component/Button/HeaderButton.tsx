import { Button } from "./Button";

export const HeaderButtons = () => {
  return (
    <div className="flex gap-4">
      <Button
        action={() => alert("Knap 1 blev klikket!")}
        size="small"
        theme="light"
        text="Knap 1"
      />
      <Button
        action={() => alert("Knap 2 blev klikket!")}
        size="medium"
        theme="dark"
        text="Knap 2"
      />
      <Button
        action={() => alert("Knap 3 blev klikket!")}
        size="large"
        theme="light"
        text="Knap 3"
      />
    </div>
  );
};