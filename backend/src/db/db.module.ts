import {Module} from '@nestjs/common'
import {databaseProviders} from '@db/db.providers'

@Module({
  imports: databaseProviders,
})
export class DatabaseModule {}
