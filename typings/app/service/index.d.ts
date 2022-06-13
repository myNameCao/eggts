// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAnswersheet from '../../../app/service/answersheet';
import ExportExam from '../../../app/service/exam';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    answersheet: AutoInstanceType<typeof ExportAnswersheet>;
    exam: AutoInstanceType<typeof ExportExam>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
