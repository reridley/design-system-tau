import type { Meta, StoryObj } from '@storybook/react'; // importing types specific to storybook react
import Item from '../Item';

// The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.

// CSF format consists of a default export called the meta
// its where you define the title of your component - reflected on the sidebar

// pass the component so storybook can use to get information. Not sure i need the example

const withContainer = (StoryFn: any) => {
    return (
        <div style={{ backgroundColor: 'rgba(6, 10, 17, 0.85)', padding: 20, width: 'fit-content' }}>
            <StoryFn />
        </div>
    );
};

// Meta component is used to declare component metadata in docs
// and gets transformed into a default export underneath the hood.
const meta: Meta<typeof Item> = {
    // can pass the type of your component as a generic to Meta, and props from Item component will be automatically inferred by that type
    title: 'Items/Item',
    component: Item,
    args: {
        name: 'Item Name',
        image: 'https://placehold.co/300x300',
        isGeneticallyBound: false,
        isSoldOut: false,
    },
    argTypes: {
        rarity: { sort: 'requiredFirst', control: 'select', options: ['common', 'epic', 'rare', 'uncommon'] },
    },
    parameters: {
        layout: 'fullscreen',
        controls: {
            exclude: ['dimension', 'quantity', 'repairLevel', 'showAmount', 'stackSize', 'isButton', 'type'],
        },
    },
    decorators: withContainer,
};

export default meta;
type Story = StoryObj<typeof Item>;

export const ItemDefault: Story = {
    args: {
        image: 'https://placehold.co/300x300',
        name: 'Item Name',
        rarity: 'uncommon',
    },
};

export const ItemWeapon: Story = {
    args: {
        name: 'Ear Piercer',
        image: '/images/items/ear-piercer.png',
        repairLevel: { exact: 0.9, formatted: '90' },
        type: 'weapon',
    },
};

export const ItemArmor: Story = {
    args: {
        name: 'Poly Vinyl Coveralls',
        image: '/images/items/poly-vinyl-coveralls.png',
        repairLevel: { exact: 0.9, formatted: '90' },
        type: 'armor',
    },
};

export const ItemMedical: Story = {
    args: {
        image: '/images/items/strong-military-stim-v23023.png',
        name: 'Mil T01-V023-3.93x4-0.03',
        stackSize: 1,
        type: 'medical',
    },
};
