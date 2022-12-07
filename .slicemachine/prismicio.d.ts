// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * text field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.text
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * links field in *Navigation*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    links: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Home field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.home
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    home: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = MovieCardsSlice | CardLinlksSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site
     * - **API ID Path**: settings.siteTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    siteTitle: prismicT.TitleField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument | SettingsDocument;
/**
 * Primary content in CardLinlks → Primary
 *
 */
interface CardLinlksSliceDefaultPrimary {
    /**
     * img field in *CardLinlks → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: card_linlks.primary.img
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    img: prismicT.ImageField<never>;
    /**
     * title field in *CardLinlks → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: card_linlks.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * link field in *CardLinlks → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: card_linlks.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for CardLinlks Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CardLinlks`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardLinlksSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CardLinlksSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CardLinlks*
 *
 */
type CardLinlksSliceVariation = CardLinlksSliceDefault;
/**
 * CardLinlks Shared Slice
 *
 * - **API ID**: `card_linlks`
 * - **Description**: `CardLinlks`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CardLinlksSlice = prismicT.SharedSlice<"card_linlks", CardLinlksSliceVariation>;
/**
 * Item in MovieCards → Items
 *
 */
export interface MovieCardsSliceDefaultItem {
    /**
     * overview field in *MovieCards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].overview
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    overview: prismicT.RichTextField;
    /**
     * popularity field in *MovieCards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].popularity
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    popularity: prismicT.RichTextField;
    /**
     * image field in *MovieCards → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * release_date field in *MovieCards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].release_date
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    release_date: prismicT.RichTextField;
    /**
     * llink field in *MovieCards → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].llink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    llink: prismicT.LinkField;
    /**
     * title field in *MovieCards → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: movie_cards.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Default variation for MovieCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `MovieCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MovieCardsSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<MovieCardsSliceDefaultItem>>;
/**
 * Slice variation for *MovieCards*
 *
 */
type MovieCardsSliceVariation = MovieCardsSliceDefault;
/**
 * MovieCards Shared Slice
 *
 * - **API ID**: `movie_cards`
 * - **Description**: `MovieCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MovieCardsSlice = prismicT.SharedSlice<"movie_cards", MovieCardsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, CardLinlksSliceDefaultPrimary, CardLinlksSliceDefault, CardLinlksSliceVariation, CardLinlksSlice, MovieCardsSliceDefaultItem, MovieCardsSliceDefault, MovieCardsSliceVariation, MovieCardsSlice };
    }
}
