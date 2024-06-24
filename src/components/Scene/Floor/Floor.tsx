import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import { SpotlightProp } from "../../../lib/models/ModelImports";

const Floor = () => {
  const [aoMap, colorMap, disMap, normGlMap, roughnessMap, logoTexture] = useLoader(
    TextureLoader,
    [
      "/floor/Concrete033_1K-JPG_AmbientOcclusion.webp",
      "/floor/Concrete033_1K-JPG_Color.webp",
      "/floor/Concrete033_1K-JPG_Displacement.webp",
      "/floor/Concrete033_1K-JPG_NormalGL.webp",
      "/floor/Concrete033_1K-JPG_Roughness.webp",
      "/images/azart.png", // Replace with the correct path to your logo
    ]
  );

  const scale = 12;
  const planeWidth = 250;
  const planeHeight = 250;

  [aoMap, colorMap, disMap, normGlMap, roughnessMap].forEach((tex) => {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(scale, scale);
  });

  const floorMaterial = new THREE.MeshStandardMaterial({
    aoMap: aoMap,
    aoMapIntensity: 1,
    map: colorMap,
    displacementMap: disMap,
    displacementScale: 1,
    normalMap: normGlMap,
    normalMapType: THREE.TangentSpaceNormalMap,
    roughnessMap: roughnessMap,
    roughness: 1,
  });

  const spotlightProps: {
    position: [number, number, number];
    rotation: [number, number, number];
  }[] = [
    // {
    //   position: [0, -2.3, -40],
    //   rotation: [0, 0, 0],
    // },
    {
      position: [0, -2.3, 40],
      rotation: [0, Math.PI, 0],
    },
    {
      position: [40, -2.3, 0],
      rotation: [0, Math.PI * 5.5, 0],
    },
    {
      position: [-40, -2.3, 0],
      rotation: [0, Math.PI * 2.5, 0],
    },
  ];

  // Define logo material
  const logoMaterial = new THREE.MeshBasicMaterial({
    map: logoTexture,
    transparent: true, // Make sure the background of the logo is transparent
  });

  const logoWidth = 15; // Adjust the size of the logo
  const logoHeight = 5;

  return (
    <>
      <Plane
        args={[planeWidth, planeHeight]}
        material={floorMaterial}
        receiveShadow
        rotation-x={-Math.PI / 2}
        position-y={-2.83}
      />
      <Plane
        args={[logoWidth, logoHeight]}
        material={logoMaterial}
        position={[0, 1, -40]} // Slightly above the floor to avoid z-fighting
        rotation={[0,0,0]}
        // scale={[5,5,5]}
      />
      {spotlightProps.map((spotlight, index) => (
        <SpotlightProp
          key={index}
          position={spotlight.position}
          rotation={spotlight.rotation}
        />
      ))}
    </>
  );
};

export default Floor;
