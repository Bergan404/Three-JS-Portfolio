import { OrbitControls, ScrollControls } from "@react-three/drei";
import { EarthPixelCanvas } from "./Pixelearth"

export const ScrollCanvas = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <EarthPixelCanvas />
            </ScrollControls>
        </>
    )
}
