declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"2021-02-16-tools-enhanced-combat-5e.md": {
	id: "2021-02-16-tools-enhanced-combat-5e.md";
  slug: "2021-02-16-tools-enhanced-combat-5e";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-10-11-triad-npcs.md": {
	id: "2021-10-11-triad-npcs.md";
  slug: "2021-10-11-triad-npcs";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-10-13-midwest-dnd-raid.md": {
	id: "2021-10-13-midwest-dnd-raid.md";
  slug: "2021-10-13-midwest-dnd-raid";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-10-29-worldbuilding-for-story.md": {
	id: "2021-10-29-worldbuilding-for-story.md";
  slug: "2021-10-29-worldbuilding-for-story";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-11-06-flaws-in-dnd.md": {
	id: "2021-11-06-flaws-in-dnd.md";
  slug: "2021-11-06-flaws-in-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-11-09-dungeons-dragons-downtime.md": {
	id: "2021-11-09-dungeons-dragons-downtime.md";
  slug: "2021-11-09-dungeons-dragons-downtime";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2021-12-23-using-pdfs-obsidian.md": {
	id: "2021-12-23-using-pdfs-obsidian.md";
  slug: "2021-12-23-using-pdfs-obsidian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-01-20-simple-5e-subsystems.md": {
	id: "2022-01-20-simple-5e-subsystems.md";
  slug: "2022-01-20-simple-5e-subsystems";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-05-23-sending-characters-off.md": {
	id: "2022-05-23-sending-characters-off.md";
  slug: "2022-05-23-sending-characters-off";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-06-13-scattered-series-infinite-wizard.md": {
	id: "2022-06-13-scattered-series-infinite-wizard.md";
  slug: "2022-06-13-scattered-series-infinite-wizard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-04-3-things-i-learned-as-a-professional-game-master.md": {
	id: "2022-08-04-3-things-i-learned-as-a-professional-game-master.md";
  slug: "2022-08-04-3-things-i-learned-as-a-professional-game-master";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-11-3-tips-for-becoming-a-professional-game-master.md": {
	id: "2022-08-11-3-tips-for-becoming-a-professional-game-master.md";
  slug: "2022-08-11-3-tips-for-becoming-a-professional-game-master";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-24-its-clear-that.md": {
	id: "2022-08-24-its-clear-that.md";
  slug: "2022-08-24-its-clear-that";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-29-magic-items-gotta-catch-em-all.md": {
	id: "2022-08-29-magic-items-gotta-catch-em-all.md";
  slug: "2022-08-29-magic-items-gotta-catch-em-all";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-09-14-summon-spells-suck-in-5e.md": {
	id: "2022-09-14-summon-spells-suck-in-5e.md";
  slug: "2022-09-14-summon-spells-suck-in-5e";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-10-23-3-reasons-to-avoid-player-secrets-dnd.md": {
	id: "2022-10-23-3-reasons-to-avoid-player-secrets-dnd.md";
  slug: "2022-10-23-3-reasons-to-avoid-player-secrets-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-12-22-make-equipment-interesting-dnd.md": {
	id: "2022-12-22-make-equipment-interesting-dnd.md";
  slug: "2022-12-22-make-equipment-interesting-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"4-ways-to-improve-initiative-dnd.md": {
	id: "4-ways-to-improve-initiative-dnd.md";
  slug: "4-ways-to-improve-initiative-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"atomic-worldbuilding.md": {
	id: "atomic-worldbuilding.md";
  slug: "atomic-worldbuilding";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"create-battle-board-dnd.md": {
	id: "create-battle-board-dnd.md";
  slug: "create-battle-board-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"creating-a-basic-interactive-map-in-obsidian.md": {
	id: "creating-a-basic-interactive-map-in-obsidian.md";
  slug: "creating-a-basic-interactive-map-in-obsidian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"dark-side-dnd-beyond.md": {
	id: "dark-side-dnd-beyond.md";
  slug: "dark-side-dnd-beyond";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"getting-started-with-legendkeeper-dnd.md": {
	id: "getting-started-with-legendkeeper-dnd.md";
  slug: "getting-started-with-legendkeeper-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"getting-started-with-obsidian-dnd.md": {
	id: "getting-started-with-obsidian-dnd.md";
  slug: "getting-started-with-obsidian-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-i-prepare-for-dnd-with-obsidian.md": {
	id: "how-i-prepare-for-dnd-with-obsidian.md";
  slug: "how-i-prepare-for-dnd-with-obsidian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"introducing-discord-share-for-obsidian.md": {
	id: "introducing-discord-share-for-obsidian.md";
  slug: "introducing-discord-share-for-obsidian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"kobold-hall-dungeon-design-exercise.md": {
	id: "kobold-hall-dungeon-design-exercise.md";
  slug: "kobold-hall-dungeon-design-exercise";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"my-obsidian-setup-for-dnd.md": {
	id: "my-obsidian-setup-for-dnd.md";
  slug: "my-obsidian-setup-for-dnd";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nentir-vale-your-next-dnd-game.md": {
	id: "nentir-vale-your-next-dnd-game.md";
  slug: "nentir-vale-your-next-dnd-game";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"organizing-obsidian-dnd-big-picture-vaults.md": {
	id: "organizing-obsidian-dnd-big-picture-vaults.md";
  slug: "organizing-obsidian-dnd-big-picture-vaults";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"organizing-obsidian-dnd-principles.md": {
	id: "organizing-obsidian-dnd-principles.md";
  slug: "organizing-obsidian-dnd-principles";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"organizing-obsidian-dnd-problem-with-plugins.md": {
	id: "organizing-obsidian-dnd-problem-with-plugins.md";
  slug: "organizing-obsidian-dnd-problem-with-plugins";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"organizing-obsidian-dnd-tags-properties.md": {
	id: "organizing-obsidian-dnd-tags-properties.md";
  slug: "organizing-obsidian-dnd-tags-properties";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"published-settings-3-myths.md": {
	id: "published-settings-3-myths.md";
  slug: "published-settings-3-myths";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"quick-dungeon-map-prep-obsidian.md": {
	id: "quick-dungeon-map-prep-obsidian.md";
  slug: "quick-dungeon-map-prep-obsidian";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"running-great-gauntlets-shadowdark-rpg.md": {
	id: "running-great-gauntlets-shadowdark-rpg.md";
  slug: "running-great-gauntlets-shadowdark-rpg";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-dark-contracts-shadowdark-adventure.md": {
	id: "the-dark-contracts-shadowdark-adventure.md";
  slug: "the-dark-contracts-shadowdark-adventure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ultimate-guide-ttrpg-campaign-managers.md": {
	id: "ultimate-guide-ttrpg-campaign-managers.md";
  slug: "ultimate-guide-ttrpg-campaign-managers";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
