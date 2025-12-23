"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  X, 
  Shield, 
  Camera, 
  Video, 
  Filter,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
  Clock,
  Users,
  Search,
  Grid,
  List
} from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  category: 'surveillance' | 'patrol' | 'access' | 'technology' | 'team' | 'k9' | 'events';
  date: string;
  duration?: string;
  tags: string[];
  views: number;
  downloads: number;
}

const SecurityGallery: React.FC = () => {
  // State Management
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'title'>('date');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const itemsPerPage = 10;

  // Enhanced Media Data with pagination-ready structure
  const mediaItems: MediaItem[] = [
    // Surveillance
    {
      id: 1,
      type: 'image',
      src: '/images/surveillance-command-center.jpg',
      thumbnail: '/thumbnails/surveillance-thumb.jpg',
      title: 'Advanced Command Center',
      description: '24/7 AI-powered surveillance monitoring with real-time threat detection',
      category: 'surveillance',
      date: '2024-03-15',
      tags: ['AI', 'Monitoring', 'Real-time'],
      views: 1245,
      downloads: 89
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/drone-surveillance.mp4',
      thumbnail: '/thumbnails/drone-thumb.jpg',
      title: 'Aerial Drone Patrol',
      description: 'High-altitude drone surveillance covering large perimeter areas',
      category: 'surveillance',
      date: '2024-03-14',
      duration: '2:45',
      tags: ['Drone', 'Aerial', 'Perimeter'],
      views: 892,
      downloads: 67
    },
    
    // Patrol
    {
      id: 3,
      type: 'image',
      src: '/images/patrol-night-operation.jpg',
      thumbnail: '/thumbnails/patrol-thumb.jpg',
      title: 'Night Patrol Operations',
      description: 'Armed security teams conducting night perimeter checks',
      category: 'patrol',
      date: '2024-03-13',
      tags: ['Night', 'Armed', 'Perimeter'],
      views: 1567,
      downloads: 112
    },
    {
      id: 4,
      type: 'video',
      src: '/videos/vehicle-patrol.mp4',
      thumbnail: '/thumbnails/vehicle-thumb.jpg',
      title: 'Rapid Response Vehicle',
      description: 'Quick deployment vehicle patrol in urban environments',
      category: 'patrol',
      date: '2024-03-12',
      duration: '1:30',
      tags: ['Vehicle', 'Response', 'Urban'],
      views: 1023,
      downloads: 78
    },
    
    // Access Control
    {
      id: 5,
      type: 'image',
      src: '/images/biometric-access.jpg',
      thumbnail: '/thumbnails/biometric-thumb.jpg',
      title: 'Biometric Entry System',
      description: 'Multi-factor authentication access control with facial recognition',
      category: 'access',
      date: '2024-03-11',
      tags: ['Biometric', 'Facial Recognition', 'Access'],
      views: 934,
      downloads: 56
    },
    
    // Technology
    {
      id: 6,
      type: 'video',
      src: '/videos/tech-demo.mp4',
      thumbnail: '/thumbnails/tech-thumb.jpg',
      title: 'AI Threat Detection',
      description: 'Machine learning algorithms identifying suspicious behavior patterns',
      category: 'technology',
      date: '2024-03-10',
      duration: '3:15',
      tags: ['AI', 'Machine Learning', 'Detection'],
      views: 1789,
      downloads: 134
    },
    
    // Team
    {
      id: 7,
      type: 'image',
      src: '/images/team-training.jpg',
      thumbnail: '/thumbnails/team-thumb.jpg',
      title: 'Special Forces Training',
      description: 'Elite security team undergoing tactical response training',
      category: 'team',
      date: '2024-03-09',
      tags: ['Training', 'Tactical', 'Elite'],
      views: 1456,
      downloads: 98
    },
    
    // K9 Unit
    {
      id: 8,
      type: 'video',
      src: '/videos/k9-operation.mp4',
      thumbnail: '/thumbnails/k9-thumb.jpg',
      title: 'K9 Explosive Detection',
      description: 'Certified K9 units conducting security sweeps at high-profile events',
      category: 'k9',
      date: '2024-03-08',
      duration: '2:10',
      tags: ['K9', 'Detection', 'Explosives'],
      views: 1678,
      downloads: 121
    },
    
    // Events
    {
      id: 9,
      type: 'image',
      src: '/images/event-security.jpg',
      thumbnail: '/thumbnails/event-thumb.jpg',
      title: 'Major Event Security',
      description: 'Crowd management and VIP protection at international conference',
      category: 'events',
      date: '2024-03-07',
      tags: ['Events', 'VIP', 'Crowd Control'],
      views: 1324,
      downloads: 92
    },
    
    // Additional items for pagination
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 10 + i,
      type: Math.random() > 0.5 ? 'image' : 'video' as 'image' | 'video',
      src: `/media/asset-${i + 10}.jpg`,
      thumbnail: `/thumbnails/thumb-${i + 10}.jpg`,
      title: `Security Operation ${i + 10}`,
      description: 'Advanced security monitoring and response operations',
      category: ['surveillance', 'patrol', 'access', 'technology', 'team', 'k9', 'events'][Math.floor(Math.random() * 7)] as any,
      date: `2024-03-${String(15 - i).padStart(2, '0')}`,
      duration: i % 3 === 0 ? '1:45' : undefined,
      tags: ['Security', 'Monitoring', 'Response'],
      views: Math.floor(Math.random() * 2000),
      downloads: Math.floor(Math.random() * 150)
    }))
  ];

  // Categories with icons and counts
  const categories = [
    { id: 'all', name: 'All Media', icon: Grid, count: mediaItems.length },
    { id: 'surveillance', name: 'Surveillance', icon: Camera, count: mediaItems.filter(m => m.category === 'surveillance').length },
    { id: 'patrol', name: 'Patrol', icon: Shield, count: mediaItems.filter(m => m.category === 'patrol').length },
    { id: 'access', name: 'Access Control', icon: Users, count: mediaItems.filter(m => m.category === 'access').length },
    { id: 'technology', name: 'Technology', icon: Video, count: mediaItems.filter(m => m.category === 'technology').length },
    { id: 'team', name: 'Our Team', icon: Users, count: mediaItems.filter(m => m.category === 'team').length },
    { id: 'k9', name: 'K9 Unit', icon: Shield, count: mediaItems.filter(m => m.category === 'k9').length },
    { id: 'events', name: 'Events', icon: Clock, count: mediaItems.filter(m => m.category === 'events').length }
  ];

  // Filter and sort logic
  const filteredMedia = mediaItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date': return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'views': return b.views - a.views;
      case 'title': return a.title.localeCompare(b.title);
      default: return 0;
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredMedia.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handleMediaClick = useCallback((media: MediaItem) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
    setIsPlaying(media.type === 'video');
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedMedia(null);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleDownload = useCallback(() => {
    if (selectedMedia) {
      // Implement download logic
      console.log('Downloading:', selectedMedia.title);
    }
  }, [selectedMedia]);

  const handleSelectItem = useCallback((id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    if (selectedItems.length === currentItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentItems.map(item => item.id));
    }
  }, [currentItems]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === ' ') {
          e.preventDefault();
          if (selectedMedia?.type === 'video') togglePlayPause();
        }
        if (e.key === 'ArrowRight') {
          const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia?.id);
          if (currentIndex < filteredMedia.length - 1) {
            handleMediaClick(filteredMedia[currentIndex + 1]);
          }
        }
        if (e.key === 'ArrowLeft') {
          const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia?.id);
          if (currentIndex > 0) {
            handleMediaClick(filteredMedia[currentIndex - 1]);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedMedia, filteredMedia, closeModal, togglePlayPause, handleMediaClick]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-gray-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-sm font-semibold text-red-300 uppercase tracking-widest">
                Security Operations Visuals
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-200 to-orange-100 bg-clip-text text-transparent">
                Security Operations
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                Gallery
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our comprehensive security portfolio featuring cutting-edge technology, 
              elite teams, and mission-critical operations captured through professional 
              documentation.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { label: 'Total Assets', value: mediaItems.length, icon: Camera },
                { label: 'Categories', value: categories.length - 1, icon: Filter },
                { label: 'Total Views', value: '50K+', icon: Video },
                { label: 'Active Operations', value: '24/7', icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Controls Bar */}
          <div className="relative z-10 mb-8 p-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search media, tags, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                />
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Sort Selector */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="date">Sort by Date</option>
                  <option value="views">Sort by Views</option>
                  <option value="title">Sort by Title</option>
                </select>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setCurrentPage(1);
                    }}
                    className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeFilter === category.id ? 'bg-white/20' : 'bg-gray-700/50'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid/List View */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`mb-12 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}`}
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group relative ${viewMode === 'list' ? 'flex gap-4 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-red-500/50' : ''}`}
              >
                {viewMode === 'list' ? (
                  // List View
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => handleSelectItem(item.id)}
                        className="absolute top-2 left-2 z-20 w-5 h-5 accent-red-600"
                      />
                      <div
                        onClick={() => handleMediaClick(item)}
                        className="relative w-32 h-24 rounded-xl overflow-hidden cursor-pointer bg-gray-900"
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.thumbnail || item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="relative w-full h-full">
                            <video
                              src={item.src}
                              className="w-full h-full object-cover"
                              muted
                              playsInline
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-10 h-10 bg-red-600/90 rounded-full flex items-center justify-center">
                                <Play className="w-4 h-4 text-white ml-0.5" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs font-medium rounded-full capitalize">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-400">{item.date}</span>
                        {item.duration && (
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>👁️ {item.views.toLocaleString()} views</span>
                        <span>📥 {item.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleMediaClick(item)}
                      className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-red-600 transition-all"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  // Grid View
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="absolute top-4 left-4 z-20 w-5 h-5 accent-red-600"
                    />
                    <div
                      onClick={() => handleMediaClick(item)}
                      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group-hover:border-red-500/50 transition-all duration-500"
                    >
                      {item.type === 'image' ? (
                        <img
                          src={item.thumbnail || item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video
                            src={item.src}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-5 h-5 text-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-3 py-1 bg-gray-900/80 text-gray-300 text-xs font-medium rounded-full capitalize">
                              {item.category}
                            </span>
                            {item.duration && (
                              <span className="text-sm text-gray-300 bg-gray-900/80 px-2 py-1 rounded">
                                {item.duration}
                              </span>
                            )}
                          </div>
                          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Quick Stats */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-300 bg-gray-900/80 px-2 py-1 rounded">
                          👁️ {item.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="mt-3">
                      <h3 className="text-white font-semibold mb-1 line-clamp-1">{item.title}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{item.date}</span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {item.downloads}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mb-12">
              <div className="text-gray-400 text-sm">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredMedia.length)} of {filteredMedia.length} media
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all ${
                        currentPage === pageNum
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-gray-800/50 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Items per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setCurrentPage(1);
                    // In a real app, you'd update itemsPerPage state here
                  }}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-red-500"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          )}

          {/* Selected Items Actions */}
          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-xl">
                <span className="text-white font-medium">
                  {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
                </span>
                <button
                  onClick={handleSelectAll}
                  className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all"
                >
                  {selectedItems.length === currentItems.length ? 'Deselect All' : 'Select All'}
                </button>
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Selected
                </button>
                <button
                  onClick={() => setSelectedItems([])}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <div className="relative z-10 text-center mt-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-gray-700/50 p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl font-bold text-white mb-4">Need Security Documentation?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Contact our media team for professional security documentation, 
                operational footage, or custom security portfolio development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105">
                  Request Media Access
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-red-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-white">{selectedMedia.title}</h3>
                    <span className="px-3 py-1 bg-red-600/20 text-red-300 text-sm font-medium rounded-full border border-red-500/30">
                      {selectedMedia.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownload}
                      className="p-3 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white hover:bg-red-600 transition-all"
                      title="Download"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="p-3 rounded-xl bg-gray-800/50 text-gray-300 hover:text-white hover:bg-red-600 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Media Content */}
              <div className="relative h-[70vh] flex items-center justify-center bg-black">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={selectedMedia.src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                        <button
                          onClick={togglePlayPause}
                          className="p-2 rounded-full bg-white text-black hover:bg-red-600 hover:text-white transition-all"
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>
                        {selectedMedia.duration && (
                          <span className="text-white text-sm">
                            {selectedMedia.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Media Info */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 text-lg mb-6">{selectedMedia.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedMedia.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-gray-800/30 border border-gray-700/50">
                      <h4 className="text-white font-semibold mb-4">Media Details</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Upload Date:</span>
                          <span className="text-white">{selectedMedia.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Views:</span>
                          <span className="text-white">{selectedMedia.views.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Downloads:</span>
                          <span className="text-white">{selectedMedia.downloads}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Type:</span>
                          <span className="text-white capitalize">{selectedMedia.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300">
                      Request Full Resolution
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
                  if (currentIndex > 0) {
                    handleMediaClick(filteredMedia[currentIndex - 1]);
                  }
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-red-600 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
                  if (currentIndex < filteredMedia.length - 1) {
                    handleMediaClick(filteredMedia[currentIndex + 1]);
                  }
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-red-600 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SecurityGallery;