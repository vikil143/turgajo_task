import DummyScreen from "@myapp/screens/details/DummyScreen";
import { AllScreenParams } from "./types";

interface Example {
    name: keyof AllScreenParams;
    component: React.ComponentType
}
interface ExamplesSection {
    sectionTitle: string
    data: Example[]
}

export const EXAMPLES: ExamplesSection[] = [
    {
        sectionTitle: 'Basic D3 Bar Graph',
        data: [
            { name: "Dummy", component: DummyScreen }
        ],
    },
]


export const AllScreensKeyList: AllScreenParams = {
    Home: undefined,
    Dummy: undefined,
}

