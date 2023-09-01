/* eslint-disable class-methods-use-this */
import { EntityDto } from '../dto/entityDto';
import { GetAllUserOutput } from './dto/getAllUserOutput';
// import { PagedResultDto } from '../dto/pagedResultDto';
import { UpdateUserInput } from './dto/updateUserInput';
import { CreateUserInput } from './dto/createUserInput';
import http from '../httpService';
import { LiteEntityDto } from '../dto/liteEntityDto';

class UserService {

  // public async signup(createUserInput: CreateUserInput) {
  //   const result = await http.post('api/User/signup', createUserInput);
  //   return result;
  // }

  public async update(updateUserInput: UpdateUserInput) {
    const result = await http.put('api/User', updateUserInput);
    return result.data.result;
  }

  public async delete(id: string) {
    const result = await http.delete('api/User', { params: id });
    console.log(result);
    return result.data;
  }

  public async getAll(): Promise <GetAllUserOutput> {
    const result = await http.get('api/User');
    return result.data;
  }
}

export default new UserService();
