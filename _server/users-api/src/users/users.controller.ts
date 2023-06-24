import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private users = [
    {
      id: 'dsf98ffdsdgf601',
      fullName: 'João Silva',
      email: { email: 'joao.silva@example.com' },
      mobile: '+55 123456789',
      mainframeData: {
        logon: 'C89324A',
      },
    },
    {
      id: 'dsf98fuoidserw2',
      fullName: 'Maria Souza',
      email: { email: 'maria.souza@example.com' },
      mobile: '+55 987654321',
      mainframeData: {
        logon: 'C85424A',
      },
    },
    {
      id: 'dsf98fwdsfrt5s03',
      fullName: 'Pedro Santos',
      email: { email: 'pedro.santos@example.com' },
      mobile: '+55 555555555',
      mainframeData: {
        logon: 'C6724A',
      },
    },
  ];;

  @Get(':id')
  getUserById(@Param('id') id: string): string {
    const selectedUser = this.users.find(user => user.id === id);
    if (selectedUser) {
      return `${selectedUser.id} - Nome: ${selectedUser.fullName}`;
    } else {
      return `Usuário com o ID ${id} não encontrado`;
    }
  }

  @Get()
  getAllUsers(): any[] {
    return this.users.map(user => user);
  }
}
