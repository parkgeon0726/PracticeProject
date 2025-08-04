import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'; 
import { ApiProperty } from '@nestjs/swagger'; 

export class CreateUserDto {   
   @ApiProperty({ example: 'user@example.com' })  
   @IsEmail()  
   email: string;   
   
   @ApiProperty({ example: '홍길동' })  
   @IsNotEmpty()  
   user_name: string;   
   
   @ApiProperty({ example: 'password123' })  
   @MinLength(8)  
   password: string; 
}