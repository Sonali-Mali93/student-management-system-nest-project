import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { StudentDataEntity } from '../models/student.entity';
import { StudentData } from '../models/student.interface';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentDataEntity)
    private readonly studentDataRepositort: Repository<StudentDataEntity>,
  ) {}

  //create student record
  createStudentRecord(Student_Data : StudentData){
    return from(this.studentDataRepositort.save(Student_Data))
  }
}
