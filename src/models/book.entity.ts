import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column()
  price: number;

  @Column({
    nullable: true,
})
  createDate: Date;

  @Column({
    nullable: true,
})
  updateDate: Date;

  @Column({
    nullable: true,
})
  createBy: number;

  @Column({
    nullable: true,
})
  updateBy: number;

  @Column({
    nullable: true,
})
  isDelete: boolean;

  create(newBook:Book){
    this.title = newBook.title
    this.price = newBook.price

    this.createBy = 0;
    this.updateBy = this.createBy;
    this.createDate = new Date();
    this.updateDate = this.createDate;
    this.isDelete = false;
  }

  update(update:Book){
    this.title = update.title
    this.price = update.price

    this.updateBy = 1;
    this.updateDate = new Date();
  }

  delete(){
    this.updateBy = 2;
    this.updateDate = new Date();
    this.isDelete = true;
  }
}