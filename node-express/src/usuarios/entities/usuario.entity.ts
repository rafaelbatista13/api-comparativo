import { ApiProperty } from '@nestjs/swagger';

export class Usuario {
  @ApiProperty({ example: 1 }) id!: number;
  @ApiProperty({ example: 'Ana Silva' }) nome!: string;
  @ApiProperty({ example: 'ana@exemplo.com' }) email!: string;
}
