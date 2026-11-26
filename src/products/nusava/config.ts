import type { ProductConfig } from '../types';

export const nusavaConfig: ProductConfig = {
  slug: 'nusava-b12',
  name: '2x1 | Nusava® Complejo de Vitamina B12 + B6 + B1',
  tagline: 'Fórmula Líquida Sublingual de Alta Potencia (5000 mcg). Apoyo al Sistema Nervioso, Metabolismo Energético y Alivio de Zumbidos en el Oído (Tinnitus)',
  volume: '60 ml por frasco (120 ml en Combo 2x1)',
  flavor: 'Sabor Frambuesa Natural',
  badges: ['Vegano 100%', 'Sin Gluten', 'Non-GMO', 'Absorción Sublingual Rápida', 'Pago Contra Entrega'],
  packs: [
    {
      id: 'pack-1',
      bottles: 1,
      title: '1 Frasco (60 ml)',
      badge: 'Prueba Inicial',
      originalPrice: 34990,
      finalPrice: 19990,
      savings: 15000,
      isPopular: false
    },
    {
      id: 'pack-2',
      bottles: 2,
      title: 'Combo 2x1 (120 ml)',
      badge: 'OFERTA MÁS ELEGIDA · PAGAS 1 LLEVAS 2',
      originalPrice: 99990,
      finalPrice: 29990,
      savings: 70000,
      isPopular: true
    },
    {
      id: 'pack-3',
      bottles: 3,
      title: 'Mega Pack 3x1 (180 ml)',
      badge: 'MÁXIMO AHORRO TRATAMIENTO',
      originalPrice: 129990,
      finalPrice: 38990,
      savings: 91000,
      isPopular: false
    }
  ],
  ingredients: [
    {
      name: 'Vitamina B12',
      dose: '5000 mcg',
      color: '#E11D48',
      benefit: 'Protege la vaina de mielina de los nervios auditivos, combate el cansancio crónico y revitaliza la función cerebral.'
    },
    {
      name: 'Vitamina B6',
      dose: '3400 mcg',
      color: '#F97316',
      benefit: 'Crucial para la síntesis de neurotransmisores (serotonina y GABA), regulando el estrés y favoreciendo un descanso profundo.'
    },
    {
      name: 'Vitamina B1',
      dose: '2400 mcg',
      color: '#F59E0B',
      benefit: 'Acelera la transformación de carbohidratos en energía ATP utilizable por tus músculos y sistema nervioso.'
    },
    {
      name: 'Niacina + Folato',
      dose: 'Fórmula Activa',
      color: '#48A127',
      benefit: 'Mejora la microcirculación periférica, permitiendo que los nutrientes lleguen eficazmente al oído interno y cerebro.'
    }
  ],
  tinnitusClaims: [
    '5 gotas sublinguales al día: más de 10.000 clientes reportan hasta un 80% menos de zumbidos a los 17 días.',
    'Apoya la regeneración y protección de la mielina en los nervios sensoriales auditivos.',
    'Reduce la hiperexcitabilidad nerviosa que intensifica los pitidos molestos, especialmente de noche.',
    'Mejora la calidad del descanso profundo al calmar la interferencia sonora constante en el silencio.'
  ],
  energyClaims: [
    'Absorción sublingual directa: evita el paso por el estómago y entra al torrente sanguíneo en minutos.',
    'Dile adiós a la pesadez de las pastillas gigantes difíciles de tragar.',
    'Claridad mental sostenida desde primera hora sin taquicardia ni bajones de azúcar.',
    'Respaldo de laboratorio con buenas prácticas de manufactura (GMP Tested).'
  ],
  routineSteps: [
    {
      step: 1,
      title: 'Tómalo por la mañana',
      description: 'Al despertar o junto a tu café matutino. Su fresco sabor frambuesa es delicioso y fácil de incorporar.',
      image: '/media/nusava/rutina-cocina.jpg'
    },
    {
      step: 2,
      title: '5 gotas debajo de la lengua',
      description: 'Carga el gotero (1.5 ml) y mantenlo bajo la lengua por 30 segundos para una absorción sublingual instantánea.',
      image: '/media/nusava/ugc-selfie.jpg'
    },
    {
      step: 3,
      title: 'Sigue tu día con energía',
      description: 'Siente cómo tu enfoque se mantiene nítido y la fatiga no te detiene hasta terminar la jornada.',
      image: '/media/nusava/enfoque-escritorio.jpg'
    }
  ],
  reviews: [
    {
      author: 'Nayeli Rojas',
      age: 28,
      city: 'Santiago Centro',
      stars: 5,
      comment: 'Soy malísima para acordarme de tomar pastillas, pero este gotero en la cocina me cambió la rutina. Lo pongo bajo la lengua antes del café y siento que rindo el triple en la oficina.',
      avatar: '/media/nusava/testimonio-1.jpg',
      verified: true
    },
    {
      author: 'Diego Ramírez',
      age: 41,
      city: 'Viña del Mar',
      stars: 5,
      comment: 'Tenía un zumbido agudo en el oído que me volvía loco al intentar dormir. Llevo 3 semanas tomándolo y la diferencia es enorme, casi ni lo noto y duermo de corrido.',
      avatar: '/media/nusava/testimonio-2.jpg',
      verified: true
    },
    {
      author: 'Fabiola Gómez',
      age: 33,
      city: 'Concepción',
      stars: 5,
      comment: 'Compré la promo 2x1 y me llegó al día siguiente con pago al recibir. Es muy rico de sabor y me ha quitado esa sensación de agotamiento permanente.',
      avatar: '/media/nusava/testimonio-3.jpg',
      verified: true
    }
  ]
};
