import { Field, InputType, Int, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@InputType('UserInput')
@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Field(() => String, { nullable: true, description: 'UUID userId unique identifer' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'Unique email for the user' })
  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Field({ description: 'User first name' })
  @Column({
    nullable: false,
  })
  firstName: string;

  @Field({ description: 'User last name' })
  @Column({
    nullable: false,
  })
  lastName: string;

  @Field({ description: 'User phonenumber' })
  @Column({
    nullable: false,
  })
  phoneNumber: string;

  @Field({ description: 'User password hashed and stored' })
  @Column()
  password: string;

  @Field(() => Boolean, { nullable: true, description: 'Used to disable the user account' })
  @Column({
    default: false,
    nullable: false,
  })
  accountDisabled: boolean;

  @Field(() => Int, { nullable: true, description: 'Used for refresh tokens' })
  @Column({
    default: 0,
  })
  tokenVersion: number;
}
