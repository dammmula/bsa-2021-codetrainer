import { UserRepository, ProfileClanRepository } from './user';
import { ClanRepository } from './clan';
import { ImagesRepository } from './images.repository';

type TUserRepository = typeof UserRepository;
type TClanRepository = typeof ClanRepository;
type TProfileClanRepository = typeof ProfileClanRepository;
const imagesRepository = new ImagesRepository();

export { UserRepository, TUserRepository };
export { ClanRepository, TClanRepository };
export { ProfileClanRepository, TProfileClanRepository };
export { imagesRepository, ImagesRepository };
