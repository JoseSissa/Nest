import { Type } from 'class-transformer';
import { IsNumber, IsString, Min, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  public description: string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @Min(18, { message: 'El valor mínimo es 0' })
  @Type(() => Number)
  public price: number;
}
