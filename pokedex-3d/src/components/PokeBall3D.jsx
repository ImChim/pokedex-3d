import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

function PokeBall() {
  const group = useRef()

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.getElapsedTime() * 0.6
    group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.15
    group.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.08
  })

  return (
    <group ref={group}>
      {/* Mitad roja */}
      <mesh position={[0, 0.02, 0]}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#dd0000"
          roughness={0.2}
          metalness={0.3}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Mitad blanca */}
      <mesh position={[0, -0.02, 0]}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshPhysicalMaterial
          color="#f5f5f5"
          roughness={0.1}
          metalness={0.2}
          reflectivity={1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Línea negra */}
      <mesh>
        <torusGeometry args={[1.51, 0.07, 32, 200]} />
        <meshStandardMaterial color="#111111" roughness={0.3} />
      </mesh>

      {/* Botón exterior blanco */}
      <mesh position={[0, 0, 1.5]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
        />
      </mesh>

      {/* Anillo del botón */}
      <mesh position={[0, 0, 1.48]}>
        <torusGeometry args={[0.28, 0.05, 16, 100]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Botón interior negro */}
      <mesh position={[0, 0, 1.68]}>
        <sphereGeometry args={[0.13, 32, 32]} />
        <meshStandardMaterial color="#222222" roughness={0.2} />
      </mesh>
    </group>
  )
}

export default function PokeBall3D() {
  return (
    <div style={{ height: '280px', margin: '10px auto 24px', maxWidth: '400px' }}>
      <Canvas camera={{ position: [0, 1.5, 5], fov: 40 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#aaaaff" />
        <spotLight position={[0, 8, 2]} intensity={1.5} angle={0.4} penumbra={0.5} />
        <PokeBall />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}