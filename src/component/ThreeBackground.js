import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 100)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)
    camera.position.z = 50

    const particles = new THREE.Group()
    scene.add(particles)

    const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff]

    function createRocket() {
      const geometry = new THREE.BufferGeometry()
      const vertices = [0, 0, 0]
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

      const material = new THREE.PointsMaterial({
        size: 0.5,
        color: 0xffffff,
      })

      const rocket = new THREE.Points(geometry, material)
      rocket.position.set((Math.random() - 0.5) * 80, -25, (Math.random() - 0.5) * 40)
      rocket.userData = { 
        velocity: new THREE.Vector3(0, Math.random() * 0.3 + 0.2, 0),
        color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
      }

      particles.add(rocket)
    }

    function createFirework(position, color) {
      const geometry = new THREE.BufferGeometry()
      const vertices = []
      const velocities = []
      const particleCount = 500
      const radius = 2

      for (let i = 0; i < particleCount; i++) {
        // Create particles in a circular pattern
        const angle = (i / particleCount) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const z = (Math.random() - 0.5) * 0.5 // Add a little depth

        vertices.push(x, y, z)

        // Calculate velocity away from the center
        const velocity = new THREE.Vector3(x, y, z).normalize().multiplyScalar(0.05)
        velocities.push(velocity.x, velocity.y, velocity.z)
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3))

      const material = new THREE.PointsMaterial({
        size: 0.1,
        color: color,
        transparent: true,
      })

      const firework = new THREE.Points(geometry, material)
      firework.position.copy(position)
      firework.userData = { age: 0 }

      particles.add(firework)
    }

    function animateParticles() {
      particles.children.forEach((particle) => {
        if (particle.userData.velocity) {
          // This is a rocket
          particle.position.add(particle.userData.velocity)
          if (particle.position.y > Math.random() * 20 + 10) {
            createFirework(particle.position, particle.userData.color)
            particles.remove(particle)
          }
        } else {
          // This is a firework
          particle.userData.age += 0.016
          if (particle.userData.age > 2) {
            particles.remove(particle)
          } else {
            particle.material.opacity = 1 - particle.userData.age / 2
            
            const positions = particle.geometry.attributes.position.array
            const velocities = particle.geometry.attributes.velocity.array
            
            for (let i = 0; i < positions.length; i += 3) {
              positions[i] += velocities[i] * (1 + particle.userData.age)
              positions[i+1] += velocities[i+1] * (1 + particle.userData.age)
              positions[i+2] += velocities[i+2] * (1 + particle.userData.age)
            }
            
            particle.geometry.attributes.position.needsUpdate = true
          }
        }
      })

      // Increase the probability of creating new rockets
      for (let i = 0; i < 3; i++) {
        if (Math.random() < 0.05) {
          createRocket()
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      animateParticles()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
}

export default ThreeBackground