import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({ example: 'Ana Silva' })
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({ example: 'ana@exemplo.com' })
  @IsEmail()
  email!: string;
}
