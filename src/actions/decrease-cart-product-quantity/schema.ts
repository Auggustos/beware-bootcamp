import { z } from "zod";

export const decreaseCartProductQuantitySchema = z.object({
  cartItemId: z.uuid(),
});

export type CecreaseCartProductQuantitySchema = z.infer<
  typeof decreaseCartProductQuantitySchema
>;
