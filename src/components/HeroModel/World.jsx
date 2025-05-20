
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export function World(props) {

  const { nodes, materials } = useGLTF('/models/tierra.glb')
  const groupRef = useRef()

  // Animación de rotación
  useFrame(({clock}) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += clock * 0.5 // Ajusta la velocidad cambiando el multiplicador
    }
  })

  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.055}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Tierra} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Nubes} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/tierra.glb')
