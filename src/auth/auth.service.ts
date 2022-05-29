import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUserName(username);
    const isValidPassword = await this.userService.checkPassword(
      password,
      user.password,
    );
    if (user && isValidPassword) return user;
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: '6293d0ce6258545c02c0bd06',
    };
    console.log(payload.sub);
    return { access_token: this.jwtService.sign(payload) };
  }

  async signUp(userDto: UserDto) {
    return this.userService.create(userDto);
  }
}
