type User = {
  id: string;
  fullName: string;
  email: {
    email: string;
  };
  mobile: string;
  mainframeData: {
    logon: string;
  };
};

const mockUsers: User[] = [
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
    email: {email: 'pedro.santos@example.com',},
    mobile: '+55 555555555',
    mainframeData: {
      logon: 'C6724A',
    },
  },
];

export default mockUsers;
