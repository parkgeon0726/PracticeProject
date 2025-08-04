import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, 
UpdateDateColumn } from 'typeorm'; 
import { Exclude } from 'class-transformer'; 

@Entity('users') 
export class UserEntity {   
   @PrimaryGeneratedColumn()  
   id: number;   
   
   @Column({ length: 50 })  
   email: string;   
   
   @Column({ length: 100 })  
   user_name: string;   
   
   @Column()  
   @Exclude()  
   password: string;   
   
   @CreateDateColumn()  
   created_at: Date;   
   
   @UpdateDateColumn()  
   updated_at: Date; 
}