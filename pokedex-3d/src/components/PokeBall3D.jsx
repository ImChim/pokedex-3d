import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

function PokeBall() {
  const group = useRef()

  useFrame(() => {
    group.current.rotation.y += 0.008
    group.current.rotation.x = 0.3
  })

  return (
    <group ref={group}>
      {/* Mitad roja */}
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#dd0000" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Mitad blanca */}
      <mesh position={[0, -0.02, 0]}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Línea negra del medio */}
      <mesh>
        <torusGeometry args={[1.51, 0.06, 16, 100]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Botón blanco exterior */}
      <mesh position={[0, 0, 1.5]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} />
      </mesh>

      {/* Botón negro interior */}
      <mesh position={[0, 0, 1.65]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
    </group>
  )
}

export default function PokeBall3D() {
  return (
    <div style={{ height: '280px', margin: '20px auto', maxWidth: '400px' }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={1} />
        <PokeBall />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}