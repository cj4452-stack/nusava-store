export interface RegionComunas {
  region: string;
  comunas: string[];
}

export const REGIONES_CHILE: RegionComunas[] = [
  {
    region: "Región Metropolitana de Santiago",
    comunas: [
      "Santiago", "Providencia", "Las Condes", "Ñuñoa", "Vitacura", "Lo Barnechea",
      "La Florida", "Maipú", "Puente Alto", "San Miguel", "Peñalolén", "La Reina",
      "Macul", "Estación Central", "Quinta Normal", "Recoleta", "Independencia",
      "San Bernardo", "Colina", "Lampa", "Pudahuel", "Quilicura", "Huechuraba",
      "Conchalí", "Renca", "Cerro Navia", "Lo Prado", "Pedro Aguirre Cerda",
      "San Joaquín", "La Granja", "La Pintana", "San Ramón", "Lo Espejo",
      "El Bosque", "Cerrillos", "Buin", "Paine", "Melipilla", "Talagante", "Peñaflor"
    ]
  },
  {
    region: "Región de Valparaíso",
    comunas: [
      "Valparaíso", "Viña del Mar", "Concón", "Quilpué", "Villa Alemana", "Quillota",
      "La Calera", "San Antonio", "Los Andes", "San Felipe", "Limache"
    ]
  },
  {
    region: "Región del Biobío",
    comunas: [
      "Concepción", "Talcahuano", "San Pedro de la Paz", "Chiguayante", "Coronel",
      "Hualpén", "Los Ángeles", "Penco", "Tomé", "Lota"
    ]
  },
  {
    region: "Región de Antofagasta",
    comunas: ["Antofagasta", "Calama", "Tocopilla", "Mejillones"]
  },
  {
    region: "Región de Coquimbo",
    comunas: ["La Serena", "Coquimbo", "Ovalle", "Illapel", "Vicuña"]
  },
  {
    region: "Región del Maule",
    comunas: ["Talca", "Curicó", "Linares", "Constitución", "Molina", "San Javier"]
  },
  {
    region: "Región de La Araucanía",
    comunas: ["Temuco", "Padre Las Casas", "Villarrica", "Pucón", "Angol"]
  },
  {
    region: "Región de Los Lagos",
    comunas: ["Puerto Montt", "Puerto Varas", "Osorno", "Castro", "Ancud"]
  },
  {
    region: "Región de O'Higgins",
    comunas: ["Rancagua", "Machalí", "Rengo", "San Fernando", "Santa Cruz"]
  },
  {
    region: "Otras Regiones de Chile",
    comunas: ["Arica", "Iquique", "Copiapó", "Chillán", "Valdivia", "Coyhaique", "Punta Arenas"]
  }
];
