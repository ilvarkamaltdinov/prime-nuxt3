/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ArticleCategory>;
  /** Format output date */
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<ArticleImageItem>;
  image_preview?: Maybe<ArticleImagePreview>;
  image_slide?: Maybe<Array<Maybe<ArticleImageSlide>>>;
  long_title?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  /** Format output date */
  publishedAt?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Format output date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  video_youtube?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['String']['output']>;
};


export type ArticleCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticlePublishedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ArticleUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  articles?: Maybe<Array<Maybe<Article>>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  long_title?: Maybe<Scalars['String']['output']>;
  page_title?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ArticleCategoryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleImageItem = {
  __typename?: 'ArticleImageItem';
  large?: Maybe<Scalars['String']['output']>;
  large_webp?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type ArticleImagePreview = {
  __typename?: 'ArticleImagePreview';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type ArticleImageSlide = {
  __typename?: 'ArticleImageSlide';
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
};

export type ArticlesPaginate = {
  __typename?: 'ArticlesPaginate';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<Article>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type Bank = {
  __typename?: 'Bank';
  approval?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  image_car?: Maybe<BankImageCar>;
  license_file?: Maybe<Scalars['String']['output']>;
  license_title?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  request?: Maybe<Scalars['Int']['output']>;
  site_text?: Maybe<SiteText>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type BankImageCar = {
  __typename?: 'BankImageCar';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type BodyType = {
  __typename?: 'BodyType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BodyTypeField = {
  __typename?: 'BodyTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ChosenFieldType = {
  __typename?: 'ChosenFieldType';
  bodyType?: Maybe<Array<Maybe<BodyTypeField>>>;
  driveType?: Maybe<Array<Maybe<DriveTypeField>>>;
  engineType?: Maybe<Array<Maybe<EngineTypeField>>>;
  folder?: Maybe<Array<Maybe<FolderField>>>;
  gearbox?: Maybe<Array<Maybe<GearboxField>>>;
  generation?: Maybe<Array<Maybe<GenerationField>>>;
  mark?: Maybe<Array<Maybe<MarkField>>>;
  owner?: Maybe<Array<Maybe<OwnerField>>>;
  priceFrom?: Maybe<Scalars['Int']['output']>;
  priceTo?: Maybe<Scalars['Int']['output']>;
  runFrom?: Maybe<Scalars['Int']['output']>;
  runTo?: Maybe<Scalars['Int']['output']>;
  yearFrom?: Maybe<Scalars['Int']['output']>;
  yearTo?: Maybe<Scalars['Int']['output']>;
};

export type Color = {
  __typename?: 'Color';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Complectation = {
  __typename?: 'Complectation';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Dealer = {
  __typename?: 'Dealer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  coordinates?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image_logo?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<DealerImage>>>;
  metro?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  schedule?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  youtube_playlist_review?: Maybe<Scalars['String']['output']>;
};

export type DealerImage = {
  __typename?: 'DealerImage';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type DriveType = {
  __typename?: 'DriveType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type DriveTypeField = {
  __typename?: 'DriveTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EngineType = {
  __typename?: 'EngineType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EngineTypeField = {
  __typename?: 'EngineTypeField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** Order object */
export type Feedback = {
  __typename?: 'Feedback';
  /** The id of the Order */
  id?: Maybe<Scalars['Int']['output']>;
};

export type Folder = {
  __typename?: 'Folder';
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type FolderField = {
  __typename?: 'FolderField';
  id?: Maybe<Scalars['Int']['output']>;
  mark_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FolderGeneration = {
  __typename?: 'FolderGeneration';
  generations?: Maybe<Array<Maybe<Generation>>>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type Gearbox = {
  __typename?: 'Gearbox';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_short?: Maybe<Scalars['String']['output']>;
  title_short_rus?: Maybe<Scalars['String']['output']>;
};

export type GearboxField = {
  __typename?: 'GearboxField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  title_short?: Maybe<Scalars['String']['output']>;
  title_short_rus?: Maybe<Scalars['String']['output']>;
};

export type Generation = {
  __typename?: 'Generation';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The count of generations */
  offers_count?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  year_begin?: Maybe<Scalars['Int']['output']>;
  year_end?: Maybe<Scalars['Int']['output']>;
};

export type GenerationField = {
  __typename?: 'GenerationField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Mark = {
  __typename?: 'Mark';
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Сортировка марки */
  order_column?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type MarkField = {
  __typename?: 'MarkField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MarkFolder = {
  __typename?: 'MarkFolder';
  folders?: Maybe<Array<Maybe<FolderGeneration>>>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Кол-во объявлений */
  offers_count?: Maybe<Scalars['Int']['output']>;
  /** Алиас */
  slug: Scalars['String']['output'];
  /** Наименование */
  title: Scalars['String']['output'];
  /** Наименование на русском */
  title_rus?: Maybe<Scalars['String']['output']>;
};

export type Modification = {
  __typename?: 'Modification';
  bodyType?: Maybe<Array<Maybe<TitleName>>>;
  generation?: Maybe<Array<Maybe<Generation>>>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  feedback?: Maybe<Feedback>;
};


export type MutationFeedbackArgs = {
  bank_title?: InputMaybe<Scalars['String']['input']>;
  client_age?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  client_phone: Scalars['String']['input'];
  client_region?: InputMaybe<Scalars['String']['input']>;
  client_session?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_body_type?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_engine?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_gearbox?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_mark?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_model?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_owners?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_price?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_run?: InputMaybe<Scalars['String']['input']>;
  client_vehicle_year?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  credit_initial_fee?: InputMaybe<Scalars['String']['input']>;
  credit_period?: InputMaybe<Scalars['String']['input']>;
  external_id?: InputMaybe<Scalars['Int']['input']>;
  external_unique_id?: InputMaybe<Scalars['String']['input']>;
  offer_price?: InputMaybe<Scalars['String']['input']>;
  offer_title?: InputMaybe<Scalars['String']['input']>;
  site_id: Scalars['Int']['input'];
  type: Scalars['String']['input'];
  utm_campaign?: InputMaybe<Scalars['String']['input']>;
  utm_content?: InputMaybe<Scalars['String']['input']>;
  utm_medium?: InputMaybe<Scalars['String']['input']>;
  utm_source?: InputMaybe<Scalars['String']['input']>;
  utm_term?: InputMaybe<Scalars['String']['input']>;
};

export type Offer = {
  __typename?: 'Offer';
  /** Кузов */
  bodyType?: Maybe<BodyType>;
  /** Категория */
  category_enum?: Maybe<Scalars['String']['output']>;
  /** Цвет */
  color?: Maybe<Color>;
  /** Название комплектации */
  complectation?: Maybe<Complectation>;
  /** Format output date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Автосалон */
  dealer?: Maybe<Dealer>;
  /** Текстовое описание для сайта */
  description?: Maybe<Scalars['String']['output']>;
  /** Привод */
  driveType?: Maybe<DriveType>;
  /** Двигатель */
  engineType?: Maybe<EngineType>;
  /** Мощность двигателя */
  engine_power?: Maybe<Scalars['Int']['output']>;
  /** Объем двигателя */
  engine_volume?: Maybe<Scalars['Float']['output']>;
  /** Сгруппированные дополнительные характеристики */
  equipment_groups?: Maybe<Array<Maybe<TitleValues>>>;
  /** Внешний идентификатор */
  external_id?: Maybe<Scalars['Int']['output']>;
  /** Внешний уникальный идентификатор */
  external_unique_id?: Maybe<Scalars['String']['output']>;
  /** Модель */
  folder?: Maybe<Folder>;
  /** КПП */
  gearbox?: Maybe<Gearbox>;
  /** Поколение */
  generation?: Maybe<Generation>;
  /** Идентификатор */
  id: Scalars['Int']['output'];
  /** Изображения */
  images?: Maybe<Array<Maybe<OfferImage>>>;
  /** Активное объявление */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** На складе */
  is_stock?: Maybe<Scalars['Boolean']['output']>;
  /** Марка */
  mark?: Maybe<Mark>;
  /** Модификация */
  modification?: Maybe<Modification>;
  name: Scalars['String']['output'];
  /** Владельцы */
  owner?: Maybe<Owner>;
  /** Цена, руб */
  price: Scalars['Int']['output'];
  /** Старая цена, руб */
  price_old?: Maybe<Scalars['Int']['output']>;
  /** Рейтинг */
  rating?: Maybe<Rating>;
  /** Пробег, км */
  run?: Maybe<Scalars['Int']['output']>;
  /** Format output date */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Ссылка на видео */
  video?: Maybe<Scalars['String']['output']>;
  /** VIN-номер */
  vin?: Maybe<Scalars['String']['output']>;
  /** Руль */
  wheel?: Maybe<Wheel>;
  /** Год */
  year?: Maybe<Scalars['Int']['output']>;
};


export type OfferCreatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OfferUpdatedAtArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['Boolean']['input']>;
  sub_day?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfferFilterValues = {
  __typename?: 'OfferFilterValues';
  bodyType?: Maybe<Array<Maybe<BodyTypeField>>>;
  chosen?: Maybe<ChosenFieldType>;
  driveType?: Maybe<Array<Maybe<DriveTypeField>>>;
  engineType?: Maybe<Array<Maybe<EngineTypeField>>>;
  folder?: Maybe<Array<Maybe<FolderField>>>;
  gearbox?: Maybe<Array<Maybe<GearboxField>>>;
  generation?: Maybe<Array<Maybe<GenerationField>>>;
  mark?: Maybe<Array<Maybe<MarkField>>>;
  owner?: Maybe<Array<Maybe<OwnerField>>>;
  price?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  run?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  year?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type OfferImage = {
  __typename?: 'OfferImage';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  /** @deprecated Используйте medium */
  src?: Maybe<Scalars['String']['output']>;
  /** @deprecated Используйте small */
  thumb?: Maybe<Scalars['String']['output']>;
  tiny?: Maybe<Scalars['String']['output']>;
  tiny_webp?: Maybe<Scalars['String']['output']>;
};

export type OfferTypePagination = {
  __typename?: 'OfferTypePagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<Offer>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

export type OfferUnionType = OfferUrlFilterPaginationType | OfferUrlType;

export type OfferUrlFilterPaginationType = {
  __typename?: 'OfferUrlFilterPaginationType';
  body_type_id_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  category?: Maybe<Scalars['String']['output']>;
  engine_type_id_array?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  folder_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  generation_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mark_slug_array?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  year_from?: Maybe<Scalars['Int']['output']>;
};

export type OfferUrlType = {
  __typename?: 'OfferUrlType';
  external_id?: Maybe<Scalars['Int']['output']>;
  folder_slug?: Maybe<Scalars['String']['output']>;
  mark_slug?: Maybe<Scalars['String']['output']>;
};

export type Owner = {
  __typename?: 'Owner';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type OwnerField = {
  __typename?: 'OwnerField';
  id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Статья */
  article?: Maybe<Article>;
  /** Категории статей */
  articleCategory?: Maybe<Array<Maybe<ArticleCategory>>>;
  /** Список статей */
  articlesPaginate?: Maybe<ArticlesPaginate>;
  /** Банк */
  bank?: Maybe<Bank>;
  /** Список банков */
  banks?: Maybe<Array<Maybe<Bank>>>;
  /** Автосалон */
  dealer?: Maybe<Dealer>;
  /** Список автосалонов */
  dealers?: Maybe<Array<Maybe<Dealer>>>;
  /** Список моделей */
  folders?: Maybe<Array<Maybe<Folder>>>;
  /** Список поколений */
  generations?: Maybe<Array<Maybe<Generation>>>;
  /** Список марок */
  markFolderGeneration?: Maybe<Array<Maybe<MarkFolder>>>;
  /** Список марок */
  marks?: Maybe<Array<Maybe<Mark>>>;
  /** Объявление */
  offer?: Maybe<Offer>;
  /** Фильтр объявлений */
  offerFilters?: Maybe<OfferFilterValues>;
  /** Определение объявление или фильтр */
  offerUrl?: Maybe<OfferUnionType>;
  /** Список объявлений */
  offers?: Maybe<OfferTypePagination>;
  /** Список регионов */
  regions?: Maybe<Array<Maybe<Region>>>;
  /** SEO теги */
  seoTag?: Maybe<SeoTag>;
  /** Настройки сайта */
  settings?: Maybe<SiteSetting>;
  /** Список баннеров */
  slides?: Maybe<Array<Maybe<Slide>>>;
  /** Список категорий услуг сервиса */
  stationCategory?: Maybe<Array<Maybe<StationCategory>>>;
  /** Список историй */
  stories?: Maybe<Array<Maybe<Story>>>;
  /** Список содержимого историй */
  storyContents?: Maybe<Array<Maybe<StoryContent>>>;
};


export type QueryArticleArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleCategoryArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArticlesPaginateArgs = {
  category_url?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBankArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBanksArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDealerArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDealersArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFoldersArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGenerationsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMarkFolderGenerationArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMarksArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOfferArgs = {
  external_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOfferFiltersArgs = {
  body_type_id?: InputMaybe<Scalars['Int']['input']>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  drive_type_id?: InputMaybe<Scalars['Int']['input']>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  engine_type_id?: InputMaybe<Scalars['Int']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gearbox_id?: InputMaybe<Scalars['Int']['input']>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  run_from?: InputMaybe<Scalars['Int']['input']>;
  run_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOfferUrlArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOffersArgs = {
  body_type_id?: InputMaybe<Scalars['Int']['input']>;
  body_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  category?: InputMaybe<Scalars['String']['input']>;
  drive_type_id?: InputMaybe<Scalars['Int']['input']>;
  drive_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  engine_type_id?: InputMaybe<Scalars['Int']['input']>;
  engine_type_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  except_external_id?: InputMaybe<Scalars['Int']['input']>;
  external_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  folder_id?: InputMaybe<Scalars['Int']['input']>;
  folder_slug?: InputMaybe<Scalars['String']['input']>;
  folder_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gearbox_id?: InputMaybe<Scalars['Int']['input']>;
  gearbox_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  generation_id?: InputMaybe<Scalars['Int']['input']>;
  generation_slug?: InputMaybe<Scalars['String']['input']>;
  generation_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mark_id?: InputMaybe<Scalars['Int']['input']>;
  mark_slug?: InputMaybe<Scalars['String']['input']>;
  mark_slug_array?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  owner_id_array?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  price_from?: InputMaybe<Scalars['Int']['input']>;
  price_to?: InputMaybe<Scalars['Int']['input']>;
  run_from?: InputMaybe<Scalars['Int']['input']>;
  run_to?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySeoTagArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySettingsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySlidesArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStationCategoryArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoriesArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoryContentsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  story_id?: InputMaybe<Scalars['Int']['input']>;
};

export type Rating = {
  __typename?: 'Rating';
  rating_body?: Maybe<Scalars['Float']['output']>;
  rating_interior?: Maybe<Scalars['Float']['output']>;
  rating_technical?: Maybe<Scalars['Float']['output']>;
  rating_total?: Maybe<Scalars['Float']['output']>;
};

export type Region = {
  __typename?: 'Region';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoTag = {
  __typename?: 'SeoTag';
  crumbs?: Maybe<Array<Maybe<SeoTagCrumbs>>>;
  /** The description of the seo tags */
  description?: Maybe<Scalars['String']['output']>;
  /** The title of the seo tags */
  page_title?: Maybe<Scalars['String']['output']>;
  site_text?: Maybe<SiteText>;
  /** The title of the seo tags */
  title?: Maybe<Scalars['String']['output']>;
};

export type SeoTagCrumbs = {
  __typename?: 'SeoTagCrumbs';
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SiteSetting = {
  __typename?: 'SiteSetting';
  id: Scalars['Int']['output'];
  settings?: Maybe<Array<Maybe<KeyValue>>>;
};

export type SiteText = {
  __typename?: 'SiteText';
  body?: Maybe<Scalars['String']['output']>;
};

export type Slide = {
  __typename?: 'Slide';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<SlideImageItemType>;
  image_element?: Maybe<SlideImageElementItemType>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SlideImageElementItemType = {
  __typename?: 'SlideImageElementItemType';
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
};

export type SlideImageItemType = {
  __typename?: 'SlideImageItemType';
  slide_1x?: Maybe<Scalars['String']['output']>;
  slide_1x_webp?: Maybe<Scalars['String']['output']>;
  slide_2x?: Maybe<Scalars['String']['output']>;
  slide_2x_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type Station = {
  __typename?: 'Station';
  id: Scalars['Int']['output'];
  image?: Maybe<StationImage>;
  price?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StationCategory = {
  __typename?: 'StationCategory';
  id: Scalars['Int']['output'];
  stations?: Maybe<Array<Maybe<Station>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StationImage = {
  __typename?: 'StationImage';
  large?: Maybe<Scalars['String']['output']>;
  large_webp?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type Story = {
  __typename?: 'Story';
  id: Scalars['Int']['output'];
  image?: Maybe<StoryImage>;
  stories?: Maybe<Array<Maybe<StoryContent>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryContent = {
  __typename?: 'StoryContent';
  body?: Maybe<Scalars['String']['output']>;
  button_color?: Maybe<Scalars['String']['output']>;
  button_link?: Maybe<Scalars['String']['output']>;
  button_title?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<StoryImageContent>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryImage = {
  __typename?: 'StoryImage';
  src?: Maybe<Scalars['String']['output']>;
  thumb?: Maybe<Scalars['String']['output']>;
  thumb_webp?: Maybe<Scalars['String']['output']>;
  tiny?: Maybe<Scalars['String']['output']>;
  tiny_webp?: Maybe<Scalars['String']['output']>;
  xs?: Maybe<Scalars['String']['output']>;
  xs_webp?: Maybe<Scalars['String']['output']>;
};

export type StoryImageContent = {
  __typename?: 'StoryImageContent';
  medium?: Maybe<Scalars['String']['output']>;
  medium_webp?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
  small_webp?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};

export type TitleName = {
  __typename?: 'TitleName';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TitleValues = {
  __typename?: 'TitleValues';
  title?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Wheel = {
  __typename?: 'Wheel';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};
