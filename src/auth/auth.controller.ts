import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication')
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Req() req) {
    console.log(process.env.JWT_SECRET);
    return await this.authService.signIn(req.user);
  }

  @Post('signup')
  async signUp(@Body() userDto: UserDto) {
    return await this.authService.signUp(userDto);
  }
}
