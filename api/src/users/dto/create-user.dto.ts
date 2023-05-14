import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ default: 'user@example.com' })
  email: string;
  @ApiProperty({ default: 'John Doe' })
  fullName: string;
  @ApiProperty({ default: 'verycomplicatedpassword' })
  password: string;
}
