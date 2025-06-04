@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    port: 5432,
    username: 'postgres',
    password: 'UncArnNeYNmUUZyTbrtimpwiqOraxTyD',
    database: 'railway',
    entities: [__dirname + `/**/*.entity{.ts,.js}`],
    synchronize: true,
  }), NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})