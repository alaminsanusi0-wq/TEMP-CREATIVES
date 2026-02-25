import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, X, CheckCircle, Lock, Trash2, Loader2 } from 'lucide-react';
import { Category, Project } from '../types';

const categories: Category[] = ["Logos", "Branding", "Social Media", "UI Design", "Posters"];

export const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>("Branding");
  const [tools, setTools] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetchProjects();
    }
  }, [isLoggedIn]);

  const fetchProjects = async () => {
    setIsLoadingProjects(true);
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoadingProjects(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/projects/${id}?password=${password}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProjects(projects.filter(p => p.id !== id));
        setMessage({ type: 'success', text: 'Project deleted successfully' });
      } else {
        setMessage({ type: 'error', text: 'Failed to delete project' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred during deletion' });
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  } as any);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "tempcreatives2026") {
      setIsLoggedIn(true);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Invalid admin password' });
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('tools', tools);
    formData.append('password', password);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Project uploaded successfully!' });
        setTitle('');
        setDescription('');
        setTools('');
        setFile(null);
        setPreview(null);
        fetchProjects(); // Refresh the list
      } else {
        setMessage({ type: 'error', text: 'Upload failed. Please try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred during upload.' });
    } finally {
      setIsUploading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md p-8 rounded-3xl glass text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2">Admin Access</h2>
          <p className="text-white/40 text-sm mb-8">Enter the secret key to manage projects.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-center"
            />
            <button className="w-full py-4 bg-primary text-dark font-bold rounded-xl hover:bg-white transition-all">
              LOGIN
            </button>
            {message && (
              <p className={`text-sm ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                {message.text}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold">Upload New Project</h2>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Upload Area */}
          <div className="space-y-6">
            <div 
              {...getRootProps()} 
              className={`aspect-square rounded-3xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-8 text-center cursor-pointer ${
                isDragActive ? "border-primary bg-primary/5" : "border-white/10 hover:border-white/30"
              }`}
            >
              <input {...getInputProps()} />
              {preview ? (
                <div className="relative w-full h-full">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-2xl" />
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setPreview(null); setFile(null); }}
                    className="absolute top-4 right-4 w-8 h-8 bg-dark/80 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-white/40" />
                  </div>
                  <p className="text-lg font-medium mb-2">Drag & drop project image</p>
                  <p className="text-white/40 text-sm">Or click to browse files</p>
                </>
              )}
            </div>
          </div>

          {/* Details Area */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Modern Brand Identity"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Category</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-dark">{cat}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Tools Used (comma separated)</label>
              <input
                type="text"
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                placeholder="e.g. Photoshop, Illustrator, Figma"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40">Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the project goals and outcome..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button 
              disabled={isUploading}
              className="w-full py-4 bg-primary text-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-50"
            >
              {isUploading ? "UPLOADING..." : "PUBLISH PROJECT"}
              {!isUploading && <CheckCircle className="w-4 h-4" />}
            </button>

            {message && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center font-medium ${message.type === 'error' ? 'text-red-500' : 'text-green-500'}`}
              >
                {message.text}
              </motion.p>
            )}
          </div>
        </form>

        {/* Project Management List */}
        <div className="mt-24">
          <h3 className="text-3xl font-display font-bold mb-8">Manage Existing Projects</h3>
          
          {isLoadingProjects ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-2xl glass group">
                  <div className="flex items-center gap-4">
                    <img src={project.imageUrl} alt="" className="w-16 h-16 object-cover rounded-lg" />
                    <div>
                      <h4 className="font-bold">{project.title}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-widest">{project.category}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(project.id)}
                    className="p-3 rounded-xl bg-white/5 text-white/40 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              {projects.length === 0 && (
                <p className="text-center py-12 text-white/20">No projects uploaded yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
