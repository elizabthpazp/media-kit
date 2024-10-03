"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; 
import { FaTiktok } from 'react-icons/fa'
import {
  Instagram,  
  Users,
  MapPin,
  Calendar,
  BarChart2,
  Award,
  Briefcase,
} from "lucide-react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const demographicData = [
  { name: "18-24", value: 46.2 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 10.5 },
  { name: "45+", value: 3.3 },
];

const platformData = [
  { name: "Instagram", followers: 13150 }, 
  { name: "TikTok", followers: 3560 },
  { name: "Threads", followers: 1740 },
];

const COLORS = ["#7137A7FF", "#905FBDFF", "#A481C4FF", "#BFA7D5FF"];

const MotionDiv = motion.div;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4 sm:p-8">
      <div className="container mx-auto bg-white rounded-3xl shadow-2xl p-4 sm:p-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          💜 Media Kit elizabthpazp.js 💜
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard number="17K+" text="Seguidores Totales" />
          <StatCard number="400K+" text="Impresiones Mensuales" />
          <StatCard number="5%" text="Tasa de Engagement" />
        </div>

        <div className="grid gap-4 sm:gap-8 md:grid-cols-2">
          <MotionDiv
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4">
              <h2 className="text-xl font-bold flex items-center">
                <Users className="mr-2" /> Datos Demográficos de la Audiencia
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2 mt-8">
                    <span className="text-sm font-medium flex items-center">
                      <Calendar className="mr-2" /> Edad: 18-24 años
                    </span>
                    <span className="text-sm font-medium">46.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 mb-8 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 mt-8">
                    <span className="text-sm font-medium flex items-center">
                      <Users className="mr-2" /> Género: Masculino
                    </span>
                    <span className="text-sm font-medium">81%</span>
                  </div>
                  <div className="w-full bg-gray-200 mb-8 rounded-full h-2.5">
                    <div
                      className="bg-pink-600 h-2.5 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex justify-between mb-2 mt-8">
                    <span className="text-sm font-medium flex items-center">
                      <MapPin className="mr-2" /> Ubicación: México
                    </span>
                    <span className="text-sm font-medium">31.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 mb-8 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={demographicData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#672AA1FF"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {demographicData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-4">
              <h2 className="text-xl font-bold flex items-center">
                <BarChart2 className="mr-2" /> Estadísticas de Redes Sociales
              </h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
              <div className="space-y-6">
              {[
                { network: "Instagram", icon: Instagram, stats: [
                  { label: "Seguidores", value: "13.2K" },
                  { label: "Alcance promedio", value: "320K" },
                  { label: "Tasa de interacción", value: "5%" }, 
                  { label: "Actividad del perfil", value: "5.4K" },
                  { label: "Clicks enlace externo", value: "1K" }, 
                ]}, 
                { network: "TikTok", icon: FaTiktok, stats: [
                  { label: "Seguidores", value: "3.6K" },
                  { label: "Vistas totales", value: "631K" },
                  { label: "Total de espectadores", value: "393K" },
                  { label: "Likes promedio", value: "42K" },
                  { label: "Veces compartido", value: "3.9K" },
                  { label: "Comentarios", value: "4K" },
                ]},
              ].map((network, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-lg flex items-center mb-3 text-pink-700">
                    {React.createElement(network.icon, { className: "mr-2 h-6 w-6" })}
                    {network.network}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {network.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center">
                        <BarChart2 className="mr-2 h-4 w-4 text-purple-500" />
                        <span className="text-sm">{stat.label}: <strong>{stat.value}</strong></span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
                <div className="h-64 pt-10 xs:ml-0 sm:ml-0 md:ml-20 lg:ml-20 xl:ml-20">
                  <ResponsiveContainer width="80%" height="100%">
                    <BarChart data={platformData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="followers" fill="#754D9AFF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-4">
              <h2 className="text-xl font-bold flex items-center">
                <Award className="mr-2" /> Colaboraciones Anteriores
              </h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Award className="mr-2 text-purple-500 flex-shrink-0 mt-1" />
                  <span>
                    Campaña de concientización sobre ciberseguridad con TechSafe
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 text-purple-500 flex-shrink-0 mt-1" />
                  <span>
                    Serie de videos tutoriales sobre programación con CodeMaster
                  </span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 text-purple-500 flex-shrink-0 mt-1" />
                  <span>Reseña de productos tecnológicos para InnoGadget</span>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 text-purple-500 flex-shrink-0 mt-1" />
                  <span>
                    Webinar sobre Inteligencia Artificial con AIFuture
                  </span>
                </li>
              </ul>
            </div>
          </MotionDiv>

          <MotionDiv
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
              <h2 className="text-xl font-bold flex items-center">
                <Briefcase className="mr-2" /> Servicios Ofrecidos
              </h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Briefcase className="mr-2 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>Posts/Videos patrocinados en redes sociales</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-2 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>Videos de reseñas de productos/servicios</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-2 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>Participación en webinars y eventos en vivo</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-2 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>Creación de contenido educativo personalizado</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mr-2 text-indigo-500 flex-shrink-0 mt-1" />
                  <span>Embajador de marca a largo plazo</span>
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-8 bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4">
            <h2 className="text-xl font-bold flex items-center">
              <Briefcase className="mr-2" /> Propuestas de Colaboración
            </h2>
            <p className="text-white opacity-90">
              Basadas en los intereses de la empresa
            </p>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-600 flex items-center">
                  <Award className="mr-2" /> 1. Promoción de Webinars sobre
                  Temas Actuales de TI
                </h3>
                <p className="text-gray-700">
                  Podemos colaborar en la creación y promoción de webinars
                  enfocados en temas candentes de TI, que luego conducirán a la
                  venta de bootcamps. Mi audiencia está muy interesada en
                  desarrollo profesional en el campo de la tecnología.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-pink-600 flex items-center">
                  <Award className="mr-2" /> 2. Promoción de Quiz de Orientación
                  Profesional en TI
                </h3>
                <p className="text-gray-700">
                  Puedo ayudar a promocionar un quiz interactivo que ayude a mi
                  audiencia a descubrir qué carrera en TI se adapta mejor a sus
                  habilidades e intereses. Esto puede generar leads cualificados
                  para sus programas educativos.
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

function StatCard({ number, text }: { number: any; text: String }) {
  return (
    <div className="p-6 text-center">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <div className="text-xl text-gray-600">{text}</div>
    </div>
  );
}

function Testimonial({ text, author }: { text: String; author: String }) {
  return (
    <div className="bg-gray-50 p-4 rounded-md italic">
      <p className="mb-2">{text}</p>
      <p className="text-right font-semibold">- {author}</p>
    </div>
  );
}
