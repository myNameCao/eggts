// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportExam from '../../../app/controller/exam';
import ExportHome from '../../../app/controller/home';
import ExportTest from '../../../app/controller/test';

declare module 'egg' {
  interface IController {
    exam: ExportExam;
    home: ExportHome;
    test: ExportTest;
  }
}
