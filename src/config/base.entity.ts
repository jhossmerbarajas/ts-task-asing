import {PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseEntity
{
	@PrimaryGeneratedColumn()
	id!: number

	@CreateDateColumn({
		type: "timestamp",
		name: "created_at"
	})
	created_at!: Date

	@UpdateDateColumn({
		type: "timestamp",
		name: "updated_at"
	})
	updated_at!: Date
} 